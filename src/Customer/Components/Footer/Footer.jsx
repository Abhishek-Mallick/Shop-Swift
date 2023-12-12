import React from "react";
import { Button, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        {/* 1st grid */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Company{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {" "}
              About{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {" "}
              Blog{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {" "}
              Careers{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {" "}
              Press{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {" "}
              Partners{" "}
            </Button>
          </div>
        </Grid>

        {/* 2nd grid */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Solutions{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {" "}
              Marketing{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {" "}
              Analytics{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {" "}
              Insights{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {" "}
              Support{" "}
            </Button>
          </div>
        </Grid>

        {/* 3rd grid */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Documentation{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {" "}
              Guides{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {" "}
              API Status{" "}
            </Button>
          </div>
        </Grid>
        
        {/* 4th grid */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Legal{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {" "}
              Claim{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {" "}
              Privacy{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {" "}
              Terms{" "}
            </Button>
          </div>
        </Grid>

        <Grid className='pt-20' item xs={12}>
      <Typography variant="body2" component="p" align="center">
        &copy; 2023 Shop-Swift. All rights reserved.
      </Typography>
      <Typography variant="body2" component="p" align="center">
        Icons taken from {' '}
        <Link href="https://www.freepik.com/" color="inherit" underline="always">Freepik </Link>
        and{' '}
        <Link href="https://www.flaticon.com" color="inherit" underline="always">Flaticon</Link>
      </Typography>
      <Typography variant="body2" component="p" align="center">
        Made by Abhishek Mallick
      </Typography>
      <Typography variant="body2" component="p" align="center" style={{ display: 'flex', justifyContent: 'center' }}>
        <a href="https://www.linkedin.com/in/abhishek-mallick09/" target="_blank">
            <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" style={{ width: '40px', height: '40px', margin: '0 10px' }}  />
        </a>

        <a href="https://github.com/Abhishek-Mallick" target="_blank">
            <img src="https://img.icons8.com/plasticine/400/github.png" alt="GitHub" style={{ width: '40px', height: '40px', margin: '0 10px' }}  />
        </a>
        </Typography>

    </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
