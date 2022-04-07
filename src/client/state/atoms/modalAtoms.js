import { atomById } from "@/client/utils/stateUtils";

export const createPostModalState = atomById("createPost", { type: "dropIn", open: false });
