import { Button } from "@mui/material";

function CButton({ children, onClick, size = "small" }) {
  return (
    <Button onClick={onClick} sx={{ m: 0.5 }} variant="contained" color="primary" size={size}>
      {children}
    </Button>
  );
}

export default CButton;
