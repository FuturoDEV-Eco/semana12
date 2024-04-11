import {TextField} from "@mui/material"

function CInput({label, onChange}){
  return (
    <TextField 
      label={label} 
      variant="outlined" 
      size="small" 
      margin="dense"
      onChange={onChange}
    />
  )
}

export default CInput