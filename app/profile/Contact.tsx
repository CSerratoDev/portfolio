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

export default function Contact() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    
    return (
        <>
        <Button onPress={onOpen} className="bg-white text-black" href="#" variant="shadow">
            Contact
        </Button>
        <Modal
            isDismissable={false}
            isKeyboardDismissDisabled={true} 
            isOpen={isOpen} 
            onOpenChange={onOpenChange}
            className="bg-[#252525]"
        >
            <ModalContent>{(onClose) => (
                <>
                    <ModalHeader className="flex flex-col gap-1 text-white">Contact   </ModalHeader>
                    <ModalBody className="flex-wrap justify-center">
                        <div className="flex flex-col gap-2 text-white">
                            <p>
                                cserrato.dev@gmail.com
                                <Link href="https://linktr.ee/serratomx" className="hover:underline text-cyan-500 flex">
                                        Social Media
                                </Link>
                            <br/>
                            </p>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                            Close
                        </Button>
                        <Button className="bg-white text-black" variant="shadow">
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
