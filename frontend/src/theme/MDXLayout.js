import React from 'react';
import MDXContent from '@theme-original/MDXContent';
import { PersonalizationProvider } from '@site/src/hooks/usePersonalization';
import { TranslationProvider } from '@site/src/hooks/useTranslation';
import styles from './MDXLayout.module.css'; // Assuming you'll create this CSS module

export default function MDXLayout(props) {
  return (
    <PersonalizationProvider>
      <TranslationProvider>
        <div className={styles.mdxLayoutContainer}>
          <MDXContent {...props} />
        </div>
      </TranslationProvider>
    </PersonalizationProvider>
  );
}
