type MenuItemProps = {
  name: string;
  description: string;
  price: number;
  isVegan?: boolean;
  emoji?: string;
};

function MenuItem({ name, description, price, isVegan, emoji = "☕" }: MenuItemProps) {
  return (
    <article className="menu-item">
      <h3>
        {emoji} {name}
      </h3>
      <p>{description}</p>
      <p className="price">{price} kr.</p>
      {isVegan && <span className="badge">Vegan</span>}
    </article>
  );
}

export default MenuItem;
