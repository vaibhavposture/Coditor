import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { xml } from "@codemirror/lang-xml";
import { css } from "@codemirror/lang-css";
import { EditorView } from "@codemirror/view";

// Styled components
const Heading = styled(Box)`
  background: #00001a; 
  display: flex;
  padding: 9px 12px;
`;

const Header = styled(Box)`
  display: flex;
  background: #000033;
  color: #AAAEBC;
  justify-content: space-between;
  font-weight: 700;
`;

const Container = styled(Box)`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  padding: 1px 8px 8px;
`;

const Editor = ({ heading, icon, color, value, onChange }) => {
  const [open, setOpen] = useState(true);

  // Custom CodeMirror theme based on your requested color
  const customTheme = EditorView.theme({
    "&": {
      backgroundColor: "#00001a",  // your new theme color
      color: "#ffffff",
      height: "100%",
    },
    ".cm-content": {
      caretColor: "#ffcc00",
    },
    ".cm-cursor, .cm-dropCursor": { borderLeftColor: "#ffcc00" },
    "&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
      backgroundColor: "#333366",
    },
    ".cm-gutters": {
      backgroundColor: "#00001a",
      color: "#AAAEBC",
      border: "none",
    },
  });

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <Container style={open ? null : { flexGrow: 0 }}>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: color,
              color: "black",
              height: "20px",
              width: "20px",
              display: "flex",
              placeContent: "center",
              borderRadius: "5px",
              marginRight: "5px",
              paddingBottom: "2px",
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
        <CloseFullscreenIcon
          fontSize="small"
          style={{ alignSelf: "center" }}
          onClick={() => setOpen((prevState) => !prevState)}
        />
      </Header>

      <CodeMirror
        value={value}
        height="200px"
        theme={customTheme}  // apply your new dark theme
        extensions={[javascript(), xml(), css()]}
        onChange={(value) => onChange(value)}
      />
    </Container>
  );
};

export default Editor;
