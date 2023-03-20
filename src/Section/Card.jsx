import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function NavbarCard() {
  const cardItems = [
    {
      title: "bagtsudin ner1",
      description: "bagtsuudin tailbar yu2 oroh ni",
    },
    {
      title: "bagtsudin ner2",
      description: "bagtsuudin tailbar yu2 oroh ni",
    },
    {
      title: "bagtsudin ner3",
      description: "bagtsuudin tailbar yu2 oroh ni",
    },
    {
      title: "bagtsudin ner4",
      description: "bagtsuudin tailbar yu2 oroh ni",
    },
    {
      title: "bagtsudin ner5",
      description: "bagtsuudin tailbar yu2 oroh ni",
    },
    {
      title: "bagtsudin ner6",
      description: "bagtsuudin tailbar yu2 oroh ni",
    },
  ];
  return (
    <>
      <h2 style={{ textAlign: "center" }}>bagtsiin uilchilgee</h2>
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: 5,
        }}
      >
        {cardItems.map((cardItem) => (
          <Card className="col-12 col-lg-3 col-sm-4">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{cardItem.title}</Card.Title>
              <Card.Text>{cardItem.description}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default NavbarCard;
