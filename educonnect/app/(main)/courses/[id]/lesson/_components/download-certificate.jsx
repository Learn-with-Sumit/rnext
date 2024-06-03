"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export const DownloadCertificate = ({courseId, totalProgress}) => {
  const [isCertificateDownloading, setIsCertificateDownloading] =
    useState(false);

  async function handleCertificateDownload() {
    try {

      setIsCertificateDownloading(true);
      fetch(`/api/certificate?courseId=${courseId}`)
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "Certificate.pdf";
          document.body.appendChild(a);
          a.click();
          a.remove();
        })

      toast.success("Certificate has been downloaded");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsCertificateDownloading(false);
    }
  }

  return (
    <Button
      onClick={handleCertificateDownload}
      disabled={totalProgress < 100}
      className="w-full mt-6">
      Download Certificate
    </Button>
  )
}
