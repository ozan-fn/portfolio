"use client";

import { InitialConfigType, LexicalComposer } from "@lexical/react/LexicalComposer";
import { CollaborationContext } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { EditorState, SerializedEditorState } from "lexical";

import { editorTheme } from "@/components/editor/themes/editor-theme";
import { TooltipProvider } from "@/components/ui/tooltip";

import { nodes } from "./nodes";
import { Plugins } from "./plugins";
import { useTheme } from "next-themes";

const editorConfig: InitialConfigType = {
    namespace: "Editor",
    theme: editorTheme,
    nodes,
    onError: (error: Error) => {
        console.error(error);
    },
};

export function Editor({ editorState, editorSerializedState, onChange, onSerializedChange }: { editorState?: EditorState; editorSerializedState?: SerializedEditorState; onChange?: (editorState: EditorState) => void; onSerializedChange?: (editorSerializedState: SerializedEditorState) => void }) {
    const theme = useTheme();

    return (
        <div className="bg-background overflow-hidden rounded-lg border shadow">
            <CollaborationContext.Provider value={{ isCollabActive: false, color: theme.theme === "dark" ? "white" : "black", name: "", yjsDocMap: new Map() }}>
                <LexicalComposer
                    initialConfig={{
                        ...editorConfig,
                        ...(editorState ? { editorState } : {}),
                        ...(editorSerializedState ? { editorState: JSON.stringify(editorSerializedState) } : {}),
                    }}
                >
                    <TooltipProvider>
                        <Plugins />

                        <OnChangePlugin
                            ignoreSelectionChange={true}
                            onChange={(editorState) => {
                                onChange?.(editorState);
                                onSerializedChange?.(editorState.toJSON());
                            }}
                        />
                    </TooltipProvider>
                </LexicalComposer>
            </CollaborationContext.Provider>
        </div>
    );
}
