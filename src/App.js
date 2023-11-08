import "./App.css";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import img from "../src/images/logo.svg";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import person from "../src/images/icon-person.svg";
import dollar from "../src/images/icon-dollar.svg";
import useCalculate from "./data/useCalculate";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  fontFamily: "unset",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const typo = {
  fontFamily: "unset",
  color: "hsl(186, 14%, 43%)",
};
function App() {
  const {
    bill,
    setbill,
    tip,
    settip,
    people,
    setpeople,
    totalPerPerson,
    tipPerPerson,
  } = useCalculate();
  console.log(bill, "wht is bill");
  console.log(tip, "tip");
  console.log(people, "peole");
  console.log(totalPerPerson, "total");
  console.log(tipPerPerson, "peers");
  return (
    // <ThemeProvider theme={Theme}>
    <div className="main">
      <img src={img} />
      <br />
      <Container
        maxWidth="md"
        sx={{
          background: "hsl(0, 0%, 100%)",
          padding: "3rem",
          "@media (max-width:600px)": {
            padding: "0rem",
          },
          borderRadius: "20px",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          padding={2}
          gap={5}
          height="100%"
          sx={{
            "@media (max-width:600px)": {
              flexDirection: "column",
            },
          }}
        >
          <Box component="form" flex={1}>
            <label id="bill">
              <Typography sx={typo} mb={1}>
                Bill
              </Typography>
              <Box sx={{ position: "relative" }}>
                <input
                  name="bill"
                  type="number"
                  value={bill}
                  placeholder="0.00"
                  onChange={(e) => setbill(e.target.value)}
                />

                <img src={dollar} className="icon" />
              </Box>
            </label>
            <Typography sx={typo} mt={4}>
              Select Tip %
            </Typography>
            <Grid container spacing={2} mt={1}>
              <Grid item xs={4}>
                <div onClick={() => settip(5)}>
                  <Item className="btn">5%</Item>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div onClick={() => settip(10)}>
                  <Item className="btn">10%</Item>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div onClick={() => settip(15)}>
                  <Item className="btn">15%</Item>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div onClick={() => settip(25)}>
                  <Item className="btn">25%</Item>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div onClick={() => settip(50)}>
                  <Item className="btn">50%</Item>
                </div>
              </Grid>
              <Grid item xs={4}>
                <input
                  placeholder="Custom"
                  className="custom"
                  style={{ marginRight: "2rem" }}
                  value={tip}
                  onChange={(e) => settip(e.target.value)}
                />
              </Grid>
            </Grid>
            <label id="people">
              <Typography sx={typo} mt={4} mb={1}>
                {" "}
                Number of People
              </Typography>

              <div style={{ position: "relative" }}>
                <input
                  name="people"
                  value={people}
                  onChange={(e) => setpeople(e.target.value)}
                />
                <img src={person} className="icon" />
              </div>
            </label>
          </Box>
          <Box
            sx={{
              paddingBottom: 2,
              width: "100%",
              flex: 1,
              height: "100%",
              background: "hsl(183, 100%, 15%)",
              borderRadius: "20px",
            }}
          >
            <Box
              sx={{
                padding: "1rem",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                padding: "2rem",
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Stack direction="column" gap={6} sx={{ width: "100%" }}>
                  <Stack direction="row" justifyContent="space-between">
                    <Box>
                      <Typography
                        sx={{
                          ...typo,
                          color: "hsl(0, 0%, 100%)",
                          fontSize: 15,
                        }}
                      >
                        Tip Amount{" "}
                      </Typography>
                      <Typography sx={{ ...typo }}>/ person</Typography>
                    </Box>
                    <Typography
                      sx={{
                        ...typo,
                        color: "hsl(172, 67%, 45%)",
                        fontSize: 32,
                      }}
                    >
                      {tipPerPerson !== "Infinity" ? tipPerPerson : 0}
                    </Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between" gap={6}>
                    <Box>
                      <Typography sx={{ ...typo, color: "hsl(0, 0%, 100%)" }}>
                        Total{" "}
                      </Typography>
                      <Typography sx={{ ...typo, fontSize: 12 }}>
                        / person
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        ...typo,
                        color: "hsl(172, 67%, 45%)",
                        fontSize: 32,
                      }}
                    >
                      {totalPerPerson !== "Infinity" ? totalPerPerson : 0}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>

              <Button
                fullWidth
                variant="contained"
                sx={{
                  ...typo,
                  padding: 2,
                  background: "  hsl(183, 100%, 25%)",
                  color: " hsl(172, 67%, 45%)",
                  ":hover": {
                    background: " hsl(172, 67%, 70%)",
                  },
                }}
              >
                RESET
              </Button>
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
    // </ThemeProvider>
  );
}

export default App;
