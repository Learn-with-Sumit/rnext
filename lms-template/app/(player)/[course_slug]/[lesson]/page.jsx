import { Button } from "@/components/ui/button";
import { VideoPlayer } from "./_components/video-player";
import { Separator } from "@/components/ui/separator";
import VideoDescription from "./_components/video-description";

const Course = () => {
	return (
		<div>
			<div className="flex flex-col max-w-4xl mx-auto pb-20">
				<div className="p-4 w-full">
					<VideoPlayer />
				</div>
				<div>
					<div className="p-4 flex flex-col md:flex-row items-center justify-between">
						<h2 className="text-2xl font-semibold mb-2">Introduction</h2>
						<Button size="lg">Enroll</Button>
					</div>
					<Separator />
					<VideoDescription />
				</div>
			</div>
		</div>
	);
};
export default Course;
