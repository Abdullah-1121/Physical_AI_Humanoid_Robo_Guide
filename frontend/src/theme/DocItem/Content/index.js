import React from 'react';
import DocItemContent from '@theme-original/DocItem/Content';
import PersonalizeButton from '@site/src/components/PersonalizeButton';
import TranslateToggle from '@site/src/components/TranslateToggle';

export default function DocItemContentWrapper(props) {
  return (
    <>
      <PersonalizeButton />
      <TranslateToggle />
      <DocItemContent {...props} />
    </>
  );
}
