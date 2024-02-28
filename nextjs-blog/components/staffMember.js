import Image from "next/image";
import '../i18n.js';
import {useTranslation} from "react-i18next";

const staffMember = (props) => {
  const { t } = useTranslation();
  return (
    <div className="team-col col-5 col-lg-3 mb-2">
      <Image
        src={props.image}
        width={300} height={300}
        alt={props.name}
      />
      <h2>{props.name}</h2>
      <p>
        {t(`team.oc${props.desc}`)}
      </p>
      <p>{props.mail}</p>
    </div>
  )
}

export default staffMember
