import image from '../../assets/images/services.jpg';

function ServicesContent() {
  return (
    <div className="services-content">
      <div className="text-column">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          molestias facere assumenda dolore illum temporibus placeat. Debitis
          accusantium eaque, iste autem aspernatur numquam temporibus tempore.
          Esse tempora labore maiores reprehenderit impedit saepe dolores in
          eaque. Cumque facere magnam in doloremque.
        </p>
      </div>
      <div className="image-column">
        <img src={image} alt="Who we are?" loading="lazy" />
      </div>
    </div>
  );
}

export default ServicesContent;
