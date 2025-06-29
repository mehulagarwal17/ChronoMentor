
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Upload, Camera, Info } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PalmUploadSection = ({ onPalmUpload }) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const { toast } = useToast();

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    if (file.type.startsWith('image/')) {
      setSelectedFile(file);
      onPalmUpload(file);
      toast({
        title: "Palm uploaded successfully!",
        description: "Analyzing your palm lines...",
      });
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file.",
        variant: "destructive",
      });
    }
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      // For now, just show a toast - in a real app you'd open camera interface
      toast({
        title: "Camera access granted",
        description: "Camera functionality would open here in full implementation.",
      });
      stream.getTracks().forEach(track => track.stop());
    } catch (error) {
      toast({
        title: "Camera access denied",
        description: "Please allow camera access or upload a photo instead.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-200 mb-4">
            Share Your Palm
          </h2>
          <p className="text-purple-300/80 text-lg">
            Upload a clear photo of your palm for personalized insights
          </p>
        </div>

        <Card className="relative p-8 bg-card/50 backdrop-blur-sm border-purple-500/20 glow">
          {/* Tooltip */}
          <div className="flex items-center justify-center mb-6 text-amber-400">
            <Info className="w-5 h-5 mr-2" />
            <span className="text-sm">Place your palm clearly under good light for best results</span>
          </div>

          {/* Upload Area */}
          <div
            className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
              dragActive 
                ? 'border-purple-400 bg-purple-500/10' 
                : 'border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/5'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />

            {selectedFile ? (
              <div className="space-y-4">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                  ✓
                </div>
                <p className="text-green-400 font-semibold">
                  {selectedFile.name} uploaded successfully!
                </p>
                <p className="text-purple-300/60">
                  Analyzing your palm lines...
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                  <Upload className="w-10 h-10 text-purple-400" />
                </div>
                
                <div>
                  <p className="text-purple-200 text-lg font-semibold mb-2">
                    Drop your palm photo here
                  </p>
                  <p className="text-purple-300/60">
                    or click to browse from your device
                  </p>
                </div>

                <div className="flex gap-4 justify-center">
                  <Button
                    onClick={openFileInput}
                    variant="outline"
                    className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Browse Files
                  </Button>
                  
                  <Button
                    onClick={openCamera}
                    variant="outline"
                    className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    Use Camera
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Mock Palm Display - shown after upload */}
          {selectedFile && (
            <div className="mt-8 p-6 bg-purple-900/20 rounded-lg border border-purple-500/20">
              <h3 className="text-purple-200 font-semibold mb-4 text-center">
                Palm Lines Detection
              </h3>
              <div className="relative mx-auto w-48 h-64 bg-gradient-to-b from-amber-100 to-amber-200 rounded-t-full rounded-b-lg">
                {/* Mock palm lines */}
                <div className="absolute top-12 left-8 right-8 h-0.5 bg-red-500 rounded animate-pulse-glow" title="Heart Line"></div>
                <div className="absolute top-20 left-6 right-10 h-0.5 bg-blue-500 rounded animate-pulse-glow" title="Head Line" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-16 left-4 bottom-8 w-0.5 bg-green-500 rounded animate-pulse-glow" title="Life Line" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-8 left-1/2 bottom-4 w-0.5 bg-purple-500 rounded animate-pulse-glow" title="Fate Line" style={{ animationDelay: '1.5s' }}></div>
              </div>
              <div className="flex justify-center gap-4 mt-4 text-xs">
                <span className="flex items-center"><div className="w-2 h-2 bg-red-500 rounded mr-1"></div>Heart</span>
                <span className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded mr-1"></div>Head</span>
                <span className="flex items-center"><div className="w-2 h-2 bg-green-500 rounded mr-1"></div>Life</span>
                <span className="flex items-center"><div className="w-2 h-2 bg-purple-500 rounded mr-1"></div>Fate</span>
              </div>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default PalmUploadSection;
