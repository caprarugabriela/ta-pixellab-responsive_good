export default function ProductTile() {
  return (
    <article className="product-tile">
      <header className="product-tile-header">
        <a href="/" tile="Thread Affair Monochrome Suit">
          <picture>
            <img
              src="/images/products/product-01a.jpg"
              alt="Thread Affair Monochrome Suit"
            />
          </picture>
        </a>

        <span className="badge badge-primary">%</span>

        <h1 className="product-tile-title">
          <a href="/" title="Thread Affair Monochrome Suit">
            <span>Thread Affair </span>
            <span>Monochrome</span> {''}
            Suit
          </a>
        </h1>

        <h2 className="product-tile-subtitle">
          <a href="" title="Thread Affair Monochrome Suit">
            London fit semi-slim
          </a>
        </h2>
      </header>

      <section className="product-tile-content">
        <span className="catalog-price">499.00</span>
        <span className="sale-price">
          USD <span>399.00</span>
        </span>
      </section>

      <footer className="product-tile-footer">
        <button className="button button-primary-outline">Add to Cart</button>
      </footer>
    </article>
  );
}
