export default function Payment() {
  return (
    <section className="home-payment container">
      <header>
        <h1>
          How to <span>Pay</span>
        </h1>
      </header>

      <ul>
        <li>
          <picture>
            <img src="/images/payment/amazon.jpg" alt="Amazon" />
          </picture>
        </li>

        <li>
          <picture>
            <img src="/images/payment/cirrus.jpg" alt="cirrus" />
          </picture>
        </li>

        <li>
          <picture>
            <img src="/images/payment/maestro.jpg" alt="maestro" />
          </picture>
        </li>

        <li>
          <picture>
            <img src="/images/payment/mastercard.jpg" alt="mastercard" />
          </picture>
        </li>

        <li>
          <picture>
            <img src="/images/payment/paypal.jpg" alt="paypal" />
          </picture>
        </li>

        <li>
          <picture>
            <img src="/images/payment/visa_electron.jpg" alt="visa_electron" />
          </picture>
        </li>

        <li>
          <picture>
            <img src="/images/payment/visa.jpg" alt="visa" />
          </picture>
        </li>
      </ul>
    </section>
  );
}
