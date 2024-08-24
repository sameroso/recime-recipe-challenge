export type GenericComponentProps<TAdditonalProperies = {}> =
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> &
    TAdditonalProperies;

export type GeneriComponent<TAdditonalProperies = {}> = (
  props: GenericComponentProps<TAdditonalProperies>
) => JSX.Element;
