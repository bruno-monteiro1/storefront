export interface Props {
  label: string;
  items: Item[];
}

interface Item {
  text: string;
  href: string;
}

//TODO: UPDATE DAISY UI TO VERSION 4
export default function Dropdown(props: Props) {
  const { label, items } = props;

  return (
    <details className="dropdown">
      <summary className="m-1 btn">{label}</summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        {items.map((item) => {
          return (
            <li>
              <a href={item.href}>{item.text} </a>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
