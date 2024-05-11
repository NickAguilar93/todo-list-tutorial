import Item from "./Item";

export default function ItemList({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Laoding...</p>
      ) : (
        food.extendedIngredients.map((item) => (
          <Item key={item.name} item={item} />
        ))
      )}
    </div>
  );
}
