'use client';

// @project
import Error500Page from '@/blocks/maintenance/Error500';

/***************************  ERROR 500 - DATA  ***************************/

const data = {
  primaryBtn: { children: 'BACK TO HOME PAGE' },
  heading: 'Please try again later or feel free to contact us if the problem persists.'
};

/***************************  ERROR - 500  ***************************/

export default function InternalServerError() {
  return <Error500Page {...data} />;
}
