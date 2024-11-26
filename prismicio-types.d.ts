// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type FooterDocumentDataSlicesSlice = FooterSlice;

/**
 * Content for footer documents
 */
interface FooterDocumentData {
  /**
   * Slice Zone field in *footer*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<FooterDocumentDataSlicesSlice> /**
   * Meta Title field in *footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: footer.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: footer.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *footer*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;

type HistoryDocumentDataSlicesSlice = HistorySlice;

/**
 * Content for history documents
 */
interface HistoryDocumentData {
  /**
   * Slice Zone field in *history*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: history.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HistoryDocumentDataSlicesSlice> /**
   * Meta Title field in *history*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: history.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *history*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: history.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *history*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: history.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * history document from Prismic
 *
 * - **API ID**: `history`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HistoryDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HistoryDocumentData>,
    "history",
    Lang
  >;

type SkillsDocumentDataSlicesSlice = SkillsSlice;

/**
 * Content for skills documents
 */
interface SkillsDocumentData {
  /**
   * Slice Zone field in *skills*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: skills.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<SkillsDocumentDataSlicesSlice> /**
   * Meta Title field in *skills*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: skills.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *skills*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: skills.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *skills*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: skills.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * skills document from Prismic
 *
 * - **API ID**: `skills`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SkillsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SkillsDocumentData>,
    "skills",
    Lang
  >;

/**
 * Item in *work → tags*
 */
export interface WorkDocumentDataTagsItem {
  /**
   * tag field in *work → tags*
   *
   * - **Field Type**: Text
   * - **Placeholder**: name of tag for work
   * - **API ID Path**: work.tags[].tag
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tag: prismic.KeyTextField;
}

type WorkDocumentDataSlicesSlice = never;

/**
 * Content for work documents
 */
interface WorkDocumentData {
  /**
   * name field in *work*
   *
   * - **Field Type**: Text
   * - **Placeholder**: name of the work
   * - **API ID Path**: work.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * tags field in *work*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: work.tags[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  tags: prismic.GroupField<Simplify<WorkDocumentDataTagsItem>>;

  /**
   * Slice Zone field in *work*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: work.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<WorkDocumentDataSlicesSlice> /**
   * Meta Title field in *work*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: work.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *work*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: work.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *work*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: work.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * work document from Prismic
 *
 * - **API ID**: `work`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type WorkDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<WorkDocumentData>, "work", Lang>;

export type AllDocumentTypes =
  | FooterDocument
  | HistoryDocument
  | SkillsDocument
  | WorkDocument;

/**
 * Item in *Footer → Default → Primary → socials*
 */
export interface FooterSliceDefaultPrimarySocialsItem {
  /**
   * icon field in *Footer → Default → Primary → socials*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.default.primary.socials[].icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;

  /**
   * link field in *Footer → Default → Primary → socials*
   *
   * - **Field Type**: Text
   * - **Placeholder**: link to social network
   * - **API ID Path**: footer.default.primary.socials[].link
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link: prismic.KeyTextField;
}

/**
 * Primary content in *Footer → Default → Primary*
 */
export interface FooterSliceDefaultPrimary {
  /**
   * email field in *Footer → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: mail to contact
   * - **API ID Path**: footer.default.primary.email
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;

  /**
   * socials field in *Footer → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.default.primary.socials[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  socials: prismic.GroupField<Simplify<FooterSliceDefaultPrimarySocialsItem>>;
}

/**
 * Default variation for Footer Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FooterSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Footer*
 */
type FooterSliceVariation = FooterSliceDefault;

/**
 * Footer Shared Slice
 *
 * - **API ID**: `footer`
 * - **Description**: Footer
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSlice = prismic.SharedSlice<"footer", FooterSliceVariation>;

/**
 * Item in *History → Default → Primary → History*
 */
export interface HistorySliceDefaultPrimaryHistoryItem {
  /**
   * icon field in *History → Default → Primary → History*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: history.default.primary.history[].icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;

  /**
   * role field in *History → Default → Primary → History*
   *
   * - **Field Type**: Text
   * - **Placeholder**: your role in company
   * - **API ID Path**: history.default.primary.history[].role
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  role: prismic.KeyTextField;

  /**
   * company field in *History → Default → Primary → History*
   *
   * - **Field Type**: Text
   * - **Placeholder**: name of company
   * - **API ID Path**: history.default.primary.history[].company
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  company: prismic.KeyTextField;

  /**
   * start_job field in *History → Default → Primary → History*
   *
   * - **Field Type**: Date
   * - **Placeholder**: date of starting job
   * - **API ID Path**: history.default.primary.history[].start_job
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  start_job: prismic.DateField;

  /**
   * leave_job field in *History → Default → Primary → History*
   *
   * - **Field Type**: Date
   * - **Placeholder**: date of leaving job
   * - **API ID Path**: history.default.primary.history[].leave_job
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  leave_job: prismic.DateField;
}

/**
 * Primary content in *History → Default → Primary*
 */
export interface HistorySliceDefaultPrimary {
  /**
   * History field in *History → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: history.default.primary.history[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  history: prismic.GroupField<Simplify<HistorySliceDefaultPrimaryHistoryItem>>;
}

/**
 * Default variation for History Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HistorySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HistorySliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *History*
 */
type HistorySliceVariation = HistorySliceDefault;

/**
 * History Shared Slice
 *
 * - **API ID**: `history`
 * - **Description**: History
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HistorySlice = prismic.SharedSlice<
  "history",
  HistorySliceVariation
>;

/**
 * Item in *Skills → Default → Primary → skills*
 */
export interface SkillsSliceDefaultPrimarySkillsItem {
  /**
   * icon field in *Skills → Default → Primary → skills*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: skills.default.primary.skills[].icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;

  /**
   * name field in *Skills → Default → Primary → skills*
   *
   * - **Field Type**: Text
   * - **Placeholder**: name of the skill
   * - **API ID Path**: skills.default.primary.skills[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * link field in *Skills → Default → Primary → skills*
   *
   * - **Field Type**: Text
   * - **Placeholder**: link to website of this skill
   * - **API ID Path**: skills.default.primary.skills[].link
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link: prismic.KeyTextField;
}

/**
 * Primary content in *Skills → Default → Primary*
 */
export interface SkillsSliceDefaultPrimary {
  /**
   * skills field in *Skills → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: skills.default.primary.skills[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  skills: prismic.GroupField<Simplify<SkillsSliceDefaultPrimarySkillsItem>>;
}

/**
 * Default variation for Skills Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SkillsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SkillsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Skills*
 */
type SkillsSliceVariation = SkillsSliceDefault;

/**
 * Skills Shared Slice
 *
 * - **API ID**: `skills`
 * - **Description**: Skills
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SkillsSlice = prismic.SharedSlice<"skills", SkillsSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataSlicesSlice,
      HistoryDocument,
      HistoryDocumentData,
      HistoryDocumentDataSlicesSlice,
      SkillsDocument,
      SkillsDocumentData,
      SkillsDocumentDataSlicesSlice,
      WorkDocument,
      WorkDocumentData,
      WorkDocumentDataTagsItem,
      WorkDocumentDataSlicesSlice,
      AllDocumentTypes,
      FooterSlice,
      FooterSliceDefaultPrimarySocialsItem,
      FooterSliceDefaultPrimary,
      FooterSliceVariation,
      FooterSliceDefault,
      HistorySlice,
      HistorySliceDefaultPrimaryHistoryItem,
      HistorySliceDefaultPrimary,
      HistorySliceVariation,
      HistorySliceDefault,
      SkillsSlice,
      SkillsSliceDefaultPrimarySkillsItem,
      SkillsSliceDefaultPrimary,
      SkillsSliceVariation,
      SkillsSliceDefault,
    };
  }
}
