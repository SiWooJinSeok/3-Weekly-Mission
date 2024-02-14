export type ModalButtonClickType = ({
  currentTarget,
  url,
}: React.MouseEvent<HTMLButtonElement> & { url: string }) => void;
