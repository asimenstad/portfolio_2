import * as S from "./Contact.styles.jsx";
import { Mail, Phone } from "@styled-icons/feather";

function Contact() {
  return (
    <S.Section id="contact">
      <h2 className="section-header">Kontakt</h2>
      <p>
        <Mail size={20} title="Mail" />
        <span>a-nna-s@hotmail.com</span>
      </p>
      <p>
        <Phone size={20} title="Phone" />
        <span>47297682</span>
      </p>
    </S.Section>
  );
}

export default Contact;
