export default function GameItem(props) {
  return <h1 {...props} className="font-secundary text-[1.45rem] text-game/25 md:text-[2rem] text-center">{props.type}</h1>;
}
