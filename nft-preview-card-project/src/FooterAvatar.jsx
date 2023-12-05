import AvatarImg from "./images/image-avatar.png";
import "./FooterAvatar.css";

function FooterAvatar() {
  return (
    <div className="footer">
      <img src={AvatarImg} alt="" />
      <p>Creation of <span className="avatar-name">Jules Wyvern</span></p>
    </div>
  );
}
export default FooterAvatar;
