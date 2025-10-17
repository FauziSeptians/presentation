import { useCallback } from 'react';

export function useDownloadPdf() {
  const download = useCallback((urlOrBlob: string | Blob, filename = 'file.pdf') => {
    const link = document.createElement('a');

    if (typeof urlOrBlob === 'string') {
      link.href = urlOrBlob;
    } else {
      const blobUrl = URL.createObjectURL(urlOrBlob);
      link.href = blobUrl;
    }

    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (typeof urlOrBlob !== 'string') {
      URL.revokeObjectURL(link.href); 
    }
  }, []);

  return { download };
}
