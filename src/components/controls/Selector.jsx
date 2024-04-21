import React from "react";
import { FormControl, useFormControlContext } from "@mui/base/FormControl";
import { styled } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import clsx from "clsx";

export default function MySelector(props) {
  const {
    label,
    data,
    value,
    onChange,
    quantity,
    onQuantityChange,
    quantitylabel,
  } = props;

  const handleSelectChange = (event) => {
    onChange(event.target.value);
  };

  const handleQuantityChange = (event) => {
    onQuantityChange(event.target.value);
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <FormControl variant="standard" required>
        <Label>{label}</Label>
        <StyledSelect value={value} onChange={handleSelectChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {data.map((item) => (
            <MenuItem key={item._id} value={item._id}>
              {item.name}
            </MenuItem>
          ))}
        </StyledSelect>
      </FormControl>
      <FormControl required>
        <Label>Cantidad</Label>
        <TextField
          placeholder={quantitylabel}
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </FormControl>
    </div>
  );
}

const StyledSelect = styled(Select)(({ theme }) => ({
  "& .MuiSelect-select": {
    width: "295px",
    height: "21px",
    padding: "8px",
    color: theme.palette.mode === "dark" ? grey[300] : grey[900],
    background: theme.palette.mode === "dark" ? grey[900] : "#fff",
    border: `1px solid ${
      theme.palette.mode === "dark" ? grey[700] : grey[200]
    }`,
    boxShadow: `0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    }`,

    "&:hover": {
      borderColor: purple[400],
    },

    "&:focus": {
      outline: 0,
      borderColor: purple[400],
      boxShadow: `0 0 0 3px ${
        theme.palette.mode === "dark" ? purple[600] : purple[200]
      }`,
    },
  },
}));

const TextField = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(2),
  },
  "& .MuiInputBase-input": {
    width: "50px",
    fontFamily: ["IBM Plex Sans", "sans-serif"],
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.5,
    padding: "8px 12px",
    borderRadius: 8,
    color: theme.palette.mode === "dark" ? grey[300] : grey[900],
    background: theme.palette.mode === "dark" ? grey[900] : "#fff",
    border: `1px solid ${
      theme.palette.mode === "dark" ? grey[700] : grey[200]
    }`,
    boxShadow: `0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    }`,

    "&:hover": {
      borderColor: purple[400],
    },

    "&:focus": {
      outline: 0,
      borderColor: purple[400],
      boxShadow: `0 0 0 3px ${
        theme.palette.mode === "dark" ? purple[600] : purple[200]
      }`,
    },
  },
}));

const Label = styled(({ children, className }) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return <p>{children}</p>;
  }

  const { error, required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return (
    <p className={clsx(className, error || showRequiredError ? "invalid" : "")}>
      {children}
      {required ? " *" : ""}
    </p>
  );
})`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.875rem;
  margin-bottom: 4px;

  &.invalid {
    color: red;
  }
`;

const purple = {
  100: "#F5E5FF",
  200: "#E8CCFF",
  300: "#DBB2FF",
  400: "#CE99FF",
  500: "#C17FFF",
  600: "#B466FF",
  700: "#A74CFF",
  800: "#9A33FF",
  900: "#8D19FF",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};
