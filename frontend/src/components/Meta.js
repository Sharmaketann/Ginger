import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Ginger Fresh',
  description:
    'We sell fresh vegetables right at your doorstep at less price compared to market.',
  keywords:
    'low price vegetables, vegetables, buy vegetables, vegetables near me',
}

export default Meta
