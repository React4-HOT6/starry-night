export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      board: {
        Row: {
          avatar: string;
          birthday: string;
          category: string;
          content: string;
          created_at: string;
          id: string;
          images: string[];
          nickname: string;
          title: string;
          user_id: string;
        };
        Insert: {
          avatar?: string;
          birthday?: string;
          category?: string;
          content?: string;
          created_at?: string;
          id?: string;
          images: string[];
          nickname?: string;
          title?: string;
          user_id?: string;
        };
        Update: {
          avatar?: string;
          birthday?: string;
          category?: string;
          content?: string;
          created_at?: string;
          id?: string;
          images?: string[];
          nickname?: string;
          title?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      comments: {
        Row: {
          avatar: string;
          content: string;
          created_at: string;
          id: string;
          nickname: string;
          post_id_fkey: string | null;
        };
        Insert: {
          avatar?: string;
          content?: string;
          created_at: string;
          id?: string;
          nickname?: string;
          post_id_fkey?: string | null;
        };
        Update: {
          avatar?: string;
          content?: string;
          created_at?: string;
          id?: string;
          nickname?: string;
          post_id_fkey?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_comments_post_id_fkey";
            columns: ["post_id_fkey"];
            isOneToOne: false;
            referencedRelation: "board";
            referencedColumns: ["id"];
          }
        ];
      };
      fortune: {
        Row: {
          horoscope_every: string | null;
          horoscope_love: string | null;
          horoscope_money: string | null;
          id: number;
          imgUrl: string | null;
          month: string | null;
          name: string | null;
          personality: string | null;
        };
        Insert: {
          horoscope_every?: string | null;
          horoscope_love?: string | null;
          horoscope_money?: string | null;
          id?: number;
          imgUrl?: string | null;
          month?: string | null;
          name?: string | null;
          personality?: string | null;
        };
        Update: {
          horoscope_every?: string | null;
          horoscope_love?: string | null;
          horoscope_money?: string | null;
          id?: number;
          imgUrl?: string | null;
          month?: string | null;
          name?: string | null;
          personality?: string | null;
        };
        Relationships: [];
      };
      starsign: {
        Row: {
          id: number;
          s_img_url: string | null;
          star_sign_description: string | null;
          star_sign_name: string | null;
        };
        Insert: {
          id?: number;
          s_img_url?: string | null;
          star_sign_description?: string | null;
          star_sign_name?: string | null;
        };
        Update: {
          id?: number;
          s_img_url?: string | null;
          star_sign_description?: string | null;
          star_sign_name?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
