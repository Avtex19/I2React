
import MiddleText from './MiddleText';
import FooterAvatar from './FooterAvatar'
import CryptoImg from './CryptoImg';
import './MiddlePart.css'

function MiddlePart() {
  return (
    <div className='middle-part'>
      <CryptoImg />
      <MiddleText />
      <FooterAvatar />
    </div>
  );
}
export default MiddlePart;