import "./TestimonialsCard.css";

const TestimonialsCard = ({ data }) => {
  return (
    <div className="col-25 col-50 col light">
      <div className="center mt-3">
        <img className="test-img" src={data.picture.large} alt="" />
      </div>
      <h5 className="center my-2">{data.name.first}</h5>
      <p className="pd">The warm atmosphere, attentive staff, and exquisite dishes made it a memorable evening. 
      Highly recommend for anyone seeking a delightful dining experience. Can't wait to go back!</p>
    </div>
  );
};

export default TestimonialsCard;
