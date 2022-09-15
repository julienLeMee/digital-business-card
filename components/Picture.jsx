import react from 'react';
import profilPicture from '../src/assets/profil-picture.jpg'

export default function Picture() {
  return (
    <div className="picture">
      <img src={profilPicture} className="profil-picture" alt="Profil picture" />
    </div>
  )
}
