import { 
    Button, 
    Modal, 
    ModalBody, 
    ModalContent, 
    ModalFooter, 
    ModalHeader, 
    useDisclosure 
} from "@heroui/react";
import Link from "next/link";
import { IoIosMail } from "react-icons/io";
import { IoLinkSharp } from "react-icons/io5";

export default function Contact() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    
    return (
        <>
        <Button onPress={onOpen} className="bg-[#364072] text-white " href="#" variant="shadow">
            Contact
        </Button>
        <Modal
            isDismissable={false}
            isKeyboardDismissDisabled={true} 
            isOpen={isOpen} 
            onOpenChange={onOpenChange}
        >
            <ModalContent>{(onClose) => (
                <>
                    <ModalHeader className="flex flex-col gap-1">Contact   </ModalHeader>
                    <ModalBody className="flex-wrap justify-center">
                        <p>
                            <div className="flex flex-col gap-2">
                                cserrato.dev@gmail.com
                                <Link href="https://linktr.ee/serratomx" className="hover:underline text-cyan-500 flex">
                                        Social Media
                                </Link>
                            </div>
                        <br/>
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                            Close
                        </Button>
                        <Button className="bg-[#364072] text-white" variant="shadow">
                            Send mail
                        </Button>
                    </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>
        </>
    );
}