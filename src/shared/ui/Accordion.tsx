export const Accordion = ({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) => {
  return <div className={classNames}>{children}</div>;
};

const Header = ({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) => {
  return (
    <div
      className={`flex items-center justify-between p-4 bg-gray-100 rounded-t-lg ${classNames}`}
    >
      {children}
    </div>
  );
};

Accordion.Header = Header;
