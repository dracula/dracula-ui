import { Box, baseColors } from "dracula-ui"

export function AccentColorPicker() {
  return (
    <Box>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          margin: "10px 0 0",
          padding: 0
        }}
      >
        {Object.keys(baseColors).map((color) => {
          return (
            <li key={color}>
              <Box
                onClick={() => {
                  window.document.documentElement.style.setProperty(
                    "--accentColor",
                    window
                      .getComputedStyle(window.document.documentElement)
                      .getPropertyValue(`--${color}`)
                  )
                }}
                style={{
                  width: 12,
                  height: 12,
                  margin: 3,
                  borderRadius: "100%",
                  cursor: "pointer"
                }}
                color={color}
              />
            </li>
          )
        })}
      </ul>
    </Box>
  )
}
