import prisma from "@/lib/prisma";

export async function POST(request: Request) {
    const { messageId } = await request.json();
    await prisma.message.update({
        where: { id: messageId },
        data: { likes: { decrement: 1 } }
    });
}