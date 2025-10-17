import { useDownloadPdf } from '@/hooks/useDownloadPdf';
import { AuroraText } from '../ui/aurora-text';
import { Button } from '../ui/button';
import { useToastStore } from '@/stores/useToastStore';

export default function PromotionTemplates() {
  const { download } = useDownloadPdf();
  const { showToast } = useToastStore();

  const handleDownload = async () => {
    try {
      await download('/files/cv.pdf', 'CV_Muhammad-Fauzi-Septiana-Putra.pdf');
      showToast('Download successfully!');
    } catch (err) {
      showToast('Download failed!');
    }
  };

  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="gradient-animated absolute inset-0 z-0 mx-6 rounded-xl px-6 opacity-50" />
      <div className="relative z-10 flex h-auto flex-col items-center justify-between gap-6 px-12 py-8 text-white md:h-56 md:flex-row md:gap-12">
        <div className="flex max-w-xl flex-col text-center md:text-left">
          <p className="text-lg leading-snug font-semibold md:text-2xl">
            I’d love to bring my skills and energy to your organization.
          </p>
          <p className="mt-2 text-sm opacity-80 md:text-base">
            Are you open to exploring how I can support your goals?
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={() => {
              download('/files/cv.pdf', 'CV_Muhammad-Fauzi-Septiana-Putra.pdf')
              showToast('download successfully!');
            }}
          >
            Download CV
          </Button>
          <a
            href="mailto:muhammad.putra1418@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Fauzi,%0AI%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!"
            className="flex cursor-pointer items-center justify-center rounded-md bg-white px-6 py-2 text-sm md:text-base"
          >
            <AuroraText>Email Me</AuroraText>
          </a>
        </div>
      </div>
    </div>
  );
}
