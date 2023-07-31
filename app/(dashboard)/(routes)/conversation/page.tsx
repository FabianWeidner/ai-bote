import Heading from "@/components/Heading";
import { MessageSquare } from 'lucide-react';

export default function ConversationPage() {
  return (
    <>
      <div className="">
        <Heading
          title="Conversation"
          description="This is the conversation page"
          icon={MessageSquare}
          iconColor="text-violet-500"
          bgColor="bg-violet-500/10"
        />
      </div>
    </>
  )
}