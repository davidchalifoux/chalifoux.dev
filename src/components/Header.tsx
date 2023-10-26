type Props = {
  title: string;
  description: string;
  id?: string;
};
export const Header: React.FC<Props> = (props) => {
  return (
    <div className="pt-32 pb-16" id={props.id}>
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-50">
          {props.title}
        </h2>
        <p className="mt-4 leading-7 text-neutral-400">{props.description}</p>
      </div>
    </div>
  );
};
