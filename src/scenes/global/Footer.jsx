import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            Frilux
          </Typography>
          <div>
            Step into the world of Frilux, where fashion meets elegance. Our
            exclusive collection is designed for the modern woman who cherishes
            style, comfort, and sophistication. At Frilux, we celebrate the
            unique essence of feminine grace in every garment. Join our
            community of style enthusiasts and embrace the joy of dressing up
            every day. © 2024 Frilux. All Rights Reserved. Discover your
            style, define your statement
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            50 North Blvd, Washington, DC 10501
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: frilux-custom@gmail.com
          </Typography>
          <Typography mb="30px">(222)333-4455</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
