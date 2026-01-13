import Button from "../components/Button";
import { GoBell, GoBroadcast } from "react-icons/go";

function ButtonPage() {
  return (
    <div>
      <div className="m-1">
        <Button primary rounded>
          <GoBell />
          Primary
        </Button>
      </div>
      <div className="m-1">
        <Button secondary outline>
          Secondary
        </Button>
      </div>
      <div className="m-1">
        <Button success outline rounded>
          <GoBell />
          Success
        </Button>
      </div>
      <div className="m-1">
        <Button danger>Danger</Button>
      </div>
      <div className="m-1">
        <Button warning outline>
          <GoBroadcast />
          Warning
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
