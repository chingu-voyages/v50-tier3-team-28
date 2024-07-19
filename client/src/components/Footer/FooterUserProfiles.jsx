function FooterUserProfiles({ profiles }) {
  return (
    <div className="box1 px-8 w-full md:w-1/3 border border-footerBoxColor rounded-3xl pt-8 pb-8">
      {profiles.map((profile, index) => (
        <div
          key={index}
          className="profile-info flex justify-between items-center mb-4">
          <div className="firstNameContainer">
            <h2 className="text-2xl text-footerProfileNameColor">
              {profile.name}
            </h2>
            <p className="text-sm text-footerBoxColor">{profile.role}</p>
          </div>
          <div className="icon-containers flex items-center">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group">
              <i className="fab fa-linkedin text-4xl mr-4 h-8 group-hover:text-[#0072B1]"></i>
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-4xl mr-2 h-8"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FooterUserProfiles;
