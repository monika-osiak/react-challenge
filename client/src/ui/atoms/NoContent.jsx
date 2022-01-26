import logo from '../../assets/no_content.png';

export const NoContent = () => {
  return (
    <div>
      <img style={{display: "block", "margin-left": "auto", "margin-right": "auto"}} src={logo}/>
      <p style={{ color: "#333333", opacity: 0.5, "text-align": "center" }}>Brak danych do wyświetlenia</p>
    </div>
  );
};
