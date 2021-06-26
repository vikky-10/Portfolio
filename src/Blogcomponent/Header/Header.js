import "./Header.css";

export default function Header() {
  return (
    <div className="head">
      <div className="headerT">
        <span className="headerTLg">BLOG</span>
      </div>
      <div className="sidebarI">
        <span className="sidebarT">CATEGORIES</span>
        <ul className="sidebarL">
          <li className="sidebarLI">Life</li>
          <li className="sidebarLI">Music</li>
          <li className="sidebarLI">Sport</li>
          <li className="sidebarLI">Style</li>
          <li className="sidebarLI">Tech</li>
          <li className="sidebarLI">Cinema</li>
        </ul>
      </div>
    </div>
  );
}
