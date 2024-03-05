import { Box, Button, Container, Stack, TextField } from "@mui/material";
import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";

export function ContactPage() {
  // INITIALIZATIONS
  const [value, setValue] = React.useState("2");
  const faq = [
    {
      question: "How to buy a product?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci sequi vitae, quam illo magnam eius quidem dignissimos in aperiam impedit.",
    },
    {
      question: "How Can I make refaund from your website ",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident omnis, placeat magni architecto quisquam eos.",
    },
    {
      question: "I am new user. How Can I start",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sed quaerat et.",
    },
    {
      question: "Return and Refaunds",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas earum dicta corrupti excepturi facilis.",
    },
    {
      question: "Are my details secured",
      answer: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      question: "Sale code is not working",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, veniam laudantium!",
    },
    {
      question: "How do I make payment by my credit card",
      answer:
        "sLorem ipsum dolor sit amet consectetur adipisicing elit. Beatae obcaecati rerum, consequuntur iusto tempore asperiores quod temporibus totam deserunt consequatur cumque?",
    },
  ];

  const rules = [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur at non, dolorem esse nam, nihil, ut facere dolores saepe corrupti eum iusto.`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur at non, dolorem esse nam, nihil, ut facere dolores saepe corrupti eum iusto. Consectetur at non, dolorem esse nam, nihil`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur at non, dolorem esse nam, nihil, ut facere dolores saepe corrupti eum iusto.`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur at non, dolorem esse nam, nihi`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur at non, dolorem esse nam, nihil, ut facere dolores saepe corrupti eum iusto.`,
  ];

  // HANDLERS
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Stack>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          mt={10}
          mb={10}
        >
          <Box sx={{ display: "flex", textAlign: "center", width: "440px" }}>
            <Card
              sx={{
                maxWidth: 440,
                p: "30px 50px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CardActionArea sx={{ p: "30px 50px" }}>
                <Box sx={{ mb: "35px" }}>
                  <EmailOutlinedIcon sx={{ width: "80px", height: "78px" }} />
                </Box>
                <Typography
                  gutterBottom
                  variant="h2"
                  component="div"
                  fontWeight={700}
                >
                  Email Address
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  info@webmail.com
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  jobs@webexample.com
                </Typography>
              </CardActionArea>
            </Card>
          </Box>

          <Box sx={{ display: "flex", textAlign: "center", width: "440px" }}>
            <Card
              sx={{
                maxWidth: 440,
                p: "30px 50px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CardActionArea sx={{ p: "30px 50px" }}>
                <Box sx={{ mb: "35px" }}>
                  <LocalPhoneOutlinedIcon
                    sx={{ width: "80px", height: "78px" }}
                  />
                </Box>
                <Typography
                  gutterBottom
                  variant="h2"
                  component="div"
                  fontWeight={700}
                >
                  Phone Number
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  +031 395 7171
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  +8210 9371-7177
                </Typography>
              </CardActionArea>
            </Card>
          </Box>

          <Box sx={{ display: "flex", textAlign: "center", width: "440px" }}>
            <Card
              sx={{
                maxWidth: 440,
                p: "30px 50px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CardActionArea sx={{ p: "30px 50px" }}>
                <Box sx={{ mb: "35px" }}>
                  <LocationOnOutlinedIcon
                    sx={{ width: "80px", height: "78px" }}
                  />
                </Box>
                <Typography
                  gutterBottom
                  variant="h2"
                  component="div"
                  fontWeight={700}
                >
                  Office Address
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  203, Ildong, Sangrok-gu,
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Ansan, South Korea
                </Typography>
              </CardActionArea>
            </Card>
          </Box>
        </Stack>

        <Stack flexDirection={"row"}>
          {/* FAQ LEFT SIDE */}
          <Stack>
            <Box sx={{ width: "880px" }}>
              <Typography variant="h1" gutterBottom>
                Help
              </Typography>
              <TabContext value={value}>
                <Box>
                  <TabList
                    value={value}
                    onChange={handleChange}
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      width: "100%",
                    }}
                    aria-label="lab API tabs example"
                  >
                    <Tab sx={{ color: "#000" }} label="Rules" value={"1"} />
                    <Tab sx={{ color: "#000" }} label="FAQ" value={"2"} />
                    <Tab
                      sx={{ color: "#000" }}
                      label="Message to Admin"
                      value={"3"}
                    />
                  </TabList>
                </Box>
                <Stack>
                  <TabPanel value={"1"}>
                    <Stack className="theRules_box">
                      <Box className={"theRulesFrame"}>
                        {rules.map((ele) => {
                          return <p>{ele}</p>;
                        })}
                      </Box>
                    </Stack>
                  </TabPanel>
                  <TabPanel value={"2"}>
                    <Stack className="accordian_menu">
                      {faq.map((ele) => {
                        return (
                          <Accordion>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panelia-content"
                              id="panelia-header"
                            >
                              <Typography>{ele.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>{ele.answer}</Typography>
                            </AccordionDetails>
                          </Accordion>
                        );
                      })}
                    </Stack>
                  </TabPanel>
                  <TabPanel value="3">
                    <Stack className="admin_letter_box">
                      <Stack className="admin_letter_container">
                        <Box className={"admin_letter_frame"}>
                          <span>Leave a message to admin</span>
                          <p>
                            Hello! Please fill this form before leave a message
                          </p>
                        </Box>
                        <Box>
                          <Card sx={{ maxWidth: "850px", p: 2 }}>
                            <CardActionArea>
                              <Box
                                component="form"
                                sx={{
                                  "& .MuiTextField-root": {
                                    m: 1,
                                    maxWidth: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                  },
                                }}
                                noValidate
                                autoComplete="off"
                              >
                                <Box sx={{ mb: 3 }}>
                                  <TextField
                                    id="outlined-basic"
                                    label="Name"
                                    variant="outlined"
                                  />
                                </Box>
                                <Box sx={{ mb: 3 }}>
                                  <TextField
                                    type="email"
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                  />
                                </Box>
                                <Box sx={{ mb: 5 }}>
                                  <TextField
                                    id="outlined-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={4}
                                    defaultValue="Type here"
                                  />
                                </Box>
                                <Box>
                                  <Button type="submit" variant="contained">
                                    Send
                                  </Button>
                                </Box>
                              </Box>
                            </CardActionArea>
                          </Card>
                        </Box>
                      </Stack>
                    </Stack>
                  </TabPanel>
                </Stack>
              </TabContext>
              <Box sx={{ textAlign: "center", mt: 4, mb: 4 }}>
                <Typography variant="h1" fontWeight={700} mb={3}>
                  Still need a help? Reach out to support 24/7:
                </Typography>
                <Button variant="contained">Contact us</Button>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 2,
                    fontSize: "42px",
                    pb: 5,
                  }}
                >
                  <LocalPhoneOutlinedIcon />
                  +823-456-789
                </Box>
              </Box>
            </Box>
          </Stack>
          {/* FAQ RIGHT SIDE */}
          <Stack width={410} mb={6}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <Card
                sx={{
                  maxWidth: "100%",
                  background: "#000",
                  padding: "50px 35px",
                }}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      color: "#ff5a3c",
                      fontSize: "16px",
                      fontWeight: 700,
                    }}
                  >
                    // subscribe
                  </Typography>
                  <Typography
                    variant="h2"
                    gutterBottom
                    component="div"
                    sx={{ color: "#fff" }}
                  >
                    Get Newsletter
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    <TextField
                      id="filled-basic"
                      label="Search"
                      variant="filled"
                      sx={{
                        input: { background: "#133236", color: "#fff" },
                      }}
                      /*  inputProps={{
                        style: {
                          height: "70px",
                        },
                      }} */
                    />
                    <Button variant="contained" sx={{ height: "55px" }}>
                      <SearchIcon />
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>

            <Box mt={3} pl={1}>
              <img
                src="/images/help.jpg"
                alt="help img"
                width="410"
                height="435"
              />
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
