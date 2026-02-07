import githubIcon from "../assets/images/github.png";

const GithubFloatingIcon = () => {
  return (
    <a
      href="https://github.com/dyfrig11"
      target="_blank"
      rel="noopener noreferrer"
      style={styles.container}
      aria-label="GitHub Profile"
    >
      <img
        src={githubIcon}
        alt="GitHub Icon"
        style={styles.icon}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.opacity = "1";
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.opacity = "0.85";
        }}
        />
    </a>
  );
};

const styles = {
  container: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 1000,
    cursor: "pointer",
  },
  icon: {
    width: "48px",
    height: "48px",
    opacity: 0.85,
    transition: "transform 0.2s ease, opacity 0.2s ease",
  },
};

export default GithubFloatingIcon;
