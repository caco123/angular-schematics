import {
  Rule,
  apply,
  applyTemplates,
  url,
  move,
  mergeWith,
  chain,
  externalSchematic,
  MergeStrategy,
} from '@angular-devkit/schematics';
import { strings, normalize } from '@angular-devkit/core';
import { DummyComponentSchema } from './dummy-component';

export function dummyComponentGenerator(options: DummyComponentSchema): Rule {
  return () => {
    const templateSrc = apply(url('./files'), [
      applyTemplates({
        classify: strings.classify,
        dasherize: strings.dasherize,
        name: options.name,
      }),
      move(normalize(`/${options.path}/${strings.dasherize(options.name)}`)),
    ]);
    return chain([
      externalSchematic('@schematics/angular', 'component', options),
      mergeWith(templateSrc, MergeStrategy.Overwrite),
    ]);
  };
}
