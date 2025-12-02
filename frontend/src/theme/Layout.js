import React from 'react';
import Layout from '@theme-original/Layout';
import AIChatWidget from '@site/src/components/AIChatWidget';

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <AIChatWidget />
    </>
  );
}
