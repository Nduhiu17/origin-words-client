import React from 'react'
import { Grid, Typography, Paper } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Link from '@material-ui/core/Link'

export const PurchasedItem = () => (
  <Paper style={{ marginBottom: 20, padding: 10 }}>
    <Grid container spacing={0} justify="space-between">
      <Grid item md={8}>
        <Typography
          style={{
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: 1.2,
            color: '#2F4F4F',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis
          gravida tempus. Etiam et aliquam magna. Nulla a sem sit amet justo
          maximus ullamcorper a in nulla.
        </Typography>
        <div className="">
          <Accordion
            square
            style={{ border: 'none !important', boxShadow: 'none' }}
          >
            <AccordionSummary expandIcon="" id="panel1a-header">
              <Link className="" style={{ color: '#617482' }}>
                View Details
              </Link>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Grid>
      <Grid item md={3}>
        <Typography
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            variant="contained"
            color="default"
            className=""
            startIcon={<CloudDownloadIcon />}
          >
            Download
          </Button>
        </Typography>
      </Grid>
    </Grid>
  </Paper>
)
