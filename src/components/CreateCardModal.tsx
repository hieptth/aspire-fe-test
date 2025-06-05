import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { createCard } from "services";
import { useCardStore } from "stores";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function CreateCardModal({ open, onClose }: Props) {
  const [holder, setHolder] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!holder.trim() || holder.trim().length < 3) {
      setError("Holder name must be at least 3 characters");
      return;
    }
    setError(null);
    setLoading(true);

    try {
      const newCard = await createCard({ holder });
      useCardStore.getState().addCard({ ...newCard });
      setHolder("");
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <Dialog.Title className="text-lg font-semibold text-neutral-900">
                  Create a new card
                </Dialog.Title>

                <div className="mt-4">
                  <div className="mb-4">
                    <label
                      htmlFor="holder"
                      className="block mb-1 text-sm/4 text-neutral-900 opacity-40 font-semibold"
                    >
                      Holder name
                    </label>
                    <input
                      type="text"
                      value={holder}
                      onChange={(e) => setHolder(e.target.value)}
                      placeholder="Card holder name"
                      className="w-full border border-neutral-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-aspire-green focus:border-transparent"
                    />
                    {error && (
                      <p className="text-xs italic text-red-700 mt-1">
                        {error}
                      </p>
                    )}
                  </div>

                  {/*
                  <div className="mb-4 flex items-center gap-2">
                    <label
                      htmlFor="color"
                      className="text-sm/4 text-neutral-900 opacity-40 font-semibold select-none"
                    >
                      Card color (optional)
                    </label>
                    <input
                      id="color"
                      type="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="w-8 h-8 cursor-pointer"
                      title="Pick card color"
                    />
                  </div>
                  */}

                  <div className="flex justify-end gap-2 text-sm/4 font-medium">
                    <button
                      disabled={loading}
                      onClick={onClose}
                      className="px-4 py-2 bg-neutral-100 rounded cursor-pointer hover:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Cancel
                    </button>
                    <button
                      disabled={loading}
                      onClick={handleSubmit}
                      className="px-4 py-2 bg-aspire-green text-white rounded cursor-pointer hover:bg-aspire-green/90 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Creating..." : "Create"}
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
