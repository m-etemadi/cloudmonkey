import Button from '../common/Button/Button';

function Home() {
  return (
    <section className="home myb-5">
      <header>
        <h1 className="heading heading-primary color-light">
          Your <span className="color-red">Business Title</span>
          <br />
          Goes Here
        </h1>
      </header>

      <Button type="primary">Learn More</Button>
    </section>
  );
}

export default Home;
